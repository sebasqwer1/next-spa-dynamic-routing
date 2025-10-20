// hooks/useConditionalRedirect.ts
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface RedirectRule {
  condition: boolean;
  target: string;
}

export function useConditionalRedirect(rules: RedirectRule[]) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;

    // Busca la primera regla que se cumpla
    const matchedRule = rules.find(rule => rule.condition);

    if (matchedRule) {
      router.replace(matchedRule.target);
    } else {
      setChecking(false);
    }
  }, [router.isReady, ...rules.map(r => r.condition), ...rules.map(r => r.target)]);

  return { checking };
}
