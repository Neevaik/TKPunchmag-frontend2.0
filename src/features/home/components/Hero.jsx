import Link from "next/link";

const HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAP3tdtmnFdMKFPiWX7Hs90TkiMrW7nKWN5Bbu98D1YgtqlY3ixjSwQK8tMlDDp4RNNMI19m6Nf_NbQBRHMP8qObIQz-8XP0EM1kxV15NeXrGy5GXYeilJzbrAXySnm7JdKjzsaPeBGp2mJ5aca488ltZ78NVi-ZUpyZqEfMsjLHmWG5NdS74DUku8_gD0nn_WsKbUlrxJraGB8qfFvfg8uqGN3G2_wG2gpSkQPYhHfhhYHddGnH_dooRmEDj8wNvEu0dXyIbUxEJsf";

export default function Hero() {
  return (
    <section className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden p-8 text-center md:p-16">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(24,17,17,0.3) 0%, rgba(24,17,17,0.9) 100%), url(${HERO_BG})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-6">
        <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm">
          New Formula Released
        </span>

        <h1 className="text-5xl font-black uppercase leading-none tracking-tighter text-white drop-shadow-2xl md:text-7xl lg:text-8xl">
          Fuel Your{" "}
          <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
            Fight
          </span>
        </h1>

        <p className="max-w-2xl text-lg font-light leading-relaxed text-gray-200 drop-shadow-md md:text-xl">
          Premium protein formulated for the hardest hitters. Clinically dosed
          for maximum recovery and explosive power.
        </p>

        <div className="mt-4 flex w-full flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/shop"
            className="inline-flex h-12 min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(212,17,17,0.4)] transition-transform hover:scale-105 hover:bg-red-700"
          >
            Shop Supplements
          </Link>
          <Link
            href="/feed"
            className="inline-flex h-12 min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-8 text-base font-bold uppercase tracking-widest text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            View Athletes
          </Link>
        </div>
      </div>
    </section>
  );
}