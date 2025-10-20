import Layout from "@/components/layout";
import { ComponentType } from "react";

export function withLayout<P extends {}>(Component: ComponentType<P>) {
  const Wrapped: React.FC<P> = (props) => {
    return (
      <Layout>
          <Component {...props} />
      </Layout>
    );
  };

  return Wrapped;
}
