import Container from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Alert({ preview }) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is a page preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              *** Trở thành KH Thân Thiết hoặc Đại Lý & Được hưởng chiết khấu từ
              10% – 41% với Đơn hàng từ 1.000.000đ:{" "}
              <a
                href="https://store.amycos.vn/membership/"
                className="underline hover:text-success duration-200 transition-colors"
              >
                Click & Đăng Ký
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
