import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  meta?: { label: string; value: string }[];
};

export function PageHeader({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  meta,
}: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {image ? (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/94 to-navy/55" />
          <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
        </div>
      ) : (
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
      )}

      <Container className="relative">
        <div className="py-16 md:py-22">
          <Reveal>
            <p className="eyebrow flex items-center gap-4">
              <span className="h-px w-8 bg-current opacity-60" aria-hidden />
              {eyebrow}
            </p>
            <h1 className="mt-6 max-w-3xl text-[2.1rem] leading-[1.08] text-white sm:text-[2.6rem] lg:text-[3.2rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-[1rem] leading-[1.8] text-white/65">
              {description}
            </p>
          </Reveal>

          {meta ? (
            <Reveal delay={0.1}>
              <dl className="mt-12 grid gap-6 border-t border-white/12 pt-8 sm:grid-cols-3">
                {meta.map((item) => (
                  <div key={item.label}>
                    <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/40">
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-[0.92rem] text-white/85">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
