import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import { LiveChatLoaderProvider, Messenger } from "react-live-chat-loader";

export default function Layout({ preview, children }) {
  return (
    <LiveChatLoaderProvider
      provider="messenger"
      providerKey="103350567990132"
      appID="103350567990132"
      locale="vi_VN"
    >
      <>
        <Meta />
        <div className="min-h-screen">
          <Alert preview={preview} />
          <main>{children}</main>
        </div>
        <Footer />
        <Messenger
          color="#FF7E29"
          loggedInGreeting="Xin chào! Chúng tôi có thể giúp gì cho bạn?"
          loggedOutGreeting="Xin chào! Chúng tôi có thể giúp gì cho bạn?"
        />
      </>
    </LiveChatLoaderProvider>
  );
}
