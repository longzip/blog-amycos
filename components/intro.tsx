export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog Mẹo Làm Đẹp.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Là phụ nữ, nhất định phải xinh đẹp và tự tin. Hãy cùng{" "}
        <a
          href="https://lanmycosmetics.amycos.vn/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Lan My Cosmetics
        </a>{" "}
        khám phá những bí quyết làm đẹp thú vị nhé .
      </h4>
    </section>
  );
}
