import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import { LiveChatLoaderProvider, Messenger } from "react-live-chat-loader";

export default function Layout({ preview, children }) {
  return (
    <LiveChatLoaderProvider
      provider="messenger"
      providerKey="359655584681683"
      appID="359655584681683"
      locale="vi_VN"
    >
      <>
        <Meta />
        <div className="min-h-screen">
          <Alert preview={preview} />
          <main>{children}</main>
        </div>
        <Footer />
        <Messenger />
      </>
    </LiveChatLoaderProvider>
  );
}
