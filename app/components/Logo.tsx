type LogoProps = {
  size?: number;
  withText?: boolean;
  className?: string;
};

// Logo oficial de Integra (símbolo + palabra), en versión con fondo transparente.
export default function Logo({ size = 36, withText = true, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/marca/simbolo.png" alt={withText ? "" : "Integra"} width={size} height={Math.round(size * 0.96)} className="shrink-0" />
      {withText && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/marca/integra-texto.png" alt="Integra" height={Math.round(size * 0.46)} style={{ height: Math.round(size * 0.46), width: "auto" }} />
      )}
    </div>
  );
}
