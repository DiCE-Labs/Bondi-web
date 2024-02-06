import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
