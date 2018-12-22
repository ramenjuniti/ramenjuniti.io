import * as React from "react";

import Footer from "../Footer";
import Header from "../Header";

export default ({ children }: any) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);
