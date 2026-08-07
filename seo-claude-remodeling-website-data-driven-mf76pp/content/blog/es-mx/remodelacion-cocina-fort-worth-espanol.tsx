import Link from "next/link";
import { Phone, ShieldCheck, FileText, Wrench, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { telHref } from "@/lib/helpers";

export default function RemodelacionCocinaFortWorthEspanol() {
  return (
    <>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Respuesta corta</p>
        <p className="mt-2 text-charcoal leading-relaxed">
          En {company.name} atendemos en español y remodelamos cocinas en Fort Worth. El gerente de
          proyecto que estará en su casa habla español, y le entregamos el contrato y la cotización por
          escrito en español. La cotización es gratis, se hace en su casa, y está detallada línea por
          línea. Una remodelación completa toma de 4 a 8 semanas de construcción, más 1 o 2 semanas antes
          para diseño y pedido de gabinetes. Para agendar su cotización, llame al{" "}
          <a href={telHref(company.phone)} className="font-semibold text-primary hover:underline">
            {company.phoneDisplay}
          </a>
          .
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        ¿Quién habla español: el vendedor, o el equipo que va a estar en su casa?
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Muchas empresas de remodelación en Fort Worth anuncian que hablan español. En la práctica, con
        frecuencia significa que una sola persona lo habla — normalmente quien contesta el teléfono o
        quien va a vender. Después el contrato llega en inglés, el gerente de proyecto manda mensajes en
        inglés, y usted termina traduciendo decisiones importantes sobre su propia casa mientras la obra
        avanza.
      </p>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Hay cuatro momentos distintos donde el idioma importa, y no siempre están cubiertos por la misma
        persona en cada empresa:
      </p>
      <div className="mt-6 overflow-x-auto rounded-lg border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="p-4 font-semibold text-charcoal">Momento</th>
              <th className="p-4 font-semibold text-charcoal">Por qué importa el idioma</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["La llamada inicial", "Es lo mínimo. Casi todos lo cubren."],
              ["La cotización", "Aquí se define qué está incluido y qué no. Un malentendido aquí se paga después."],
              ["El contrato", "Es el documento legal. Debe entenderlo completo antes de firmar, en el idioma que domina."],
              ["La obra diaria", "Decisiones sobre materiales, cambios y problemas ocurren todos los días durante semanas."],
            ].map((row) => (
              <tr key={row[0]} className="border-t">
                <td className="p-4 font-medium text-charcoal">{row[0]}</td>
                <td className="p-4 text-muted-foreground">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 rounded-lg border bg-muted p-4 text-sm text-muted-foreground">
        La pregunta que conviene hacer: <em>&ldquo;¿El gerente de proyecto que me va a dar las
        actualizaciones diarias habla español, y me pueden entregar el contrato y la cotización por
        escrito en español?&rdquo;</em> En {company.name}, la respuesta a las dos es sí.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        ¿Cuánto tiempo toma remodelar una cocina completa?
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        De <strong className="text-charcoal">4 a 8 semanas de construcción</strong>, más 1 o 2 semanas
        antes de que empiece la demolición para diseño, selección de materiales y pedido de gabinetes. Lo
        que casi siempre determina la fecha de inicio no es la disponibilidad del equipo: son los
        gabinetes. Se fabrican después de que usted los elige, y ese tiempo de fabricación corre antes de
        que se pueda demoler nada.
      </p>
      <ol className="mt-6 space-y-4">
        {[
          ["Consulta de diseño", "Medimos, platicamos su lista de deseos y presupuesto, y desarrollamos un plan de distribución y acabados con una cotización detallada."],
          ["Selecciones y pedido", "Gabinetes, cubiertas, azulejo y accesorios se confirman y se ordenan antes de la demolición, para que el proyecto nunca se detenga esperando materiales."],
          ["Demolición y construcción", "Retiro, enmarcado, e instalación preliminar de plomería y electricidad, seguido de tablaroca, gabinetes y plantilla de cubiertas."],
          ["Acabados y recorrido final", "Backsplash, iluminación, herrajes y electrodomésticos instalados, lista de pendientes terminada, y su cocina nueva revelada."],
        ].map(([title, body], i) => (
          <li key={title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-charcoal">{title}</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        ¿Cuánto cuesta y qué debe incluir la cotización gratis?
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Los proyectos de reemplazo de gabinetes y cubiertas suelen costar entre{" "}
        <strong className="text-charcoal">$12,000 y $25,000</strong>, mientras que una renovación
        completa de cocina típicamente va de <strong className="text-charcoal">$30,000 a $75,000</strong>{" "}
        o más, dependiendo del tamaño, cambios de distribución y materiales.
      </p>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Una cotización seria se entrega por escrito y desglosada línea por línea: cada material y cada
        partida de mano de obra por separado. Lo que debe aparecer en el documento:
      </p>
      <ul className="mt-5 space-y-3">
        {[
          "Cada material especificado por nombre, marca o tipo — no solo \"gabinetes\"",
          "La mano de obra separada de los materiales",
          "Qué está incluido y, con la misma claridad, qué no está incluido",
          "Quién saca los permisos y si el costo está incluido",
          "El calendario de pagos ligado a etapas terminadas",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        Cómo verificar que un contratista en Texas es legítimo
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Esto sorprende a mucha gente: Texas no emite una licencia estatal para contratistas generales de
        remodelación. La verificación recae en usted. Tres documentos que debe pedir, y que cualquier
        empresa seria entrega sin poner peros:
      </p>
      <ol className="mt-6 space-y-4">
        {[
          [
            "Certificado de seguro de responsabilidad civil",
            "Si alguien se lesiona trabajando en su casa y la empresa no tiene seguro, ese costo puede terminar en su póliza de propietario.",
          ],
          [
            "Licencia vigente del electricista y del plomero — de dos agencias distintas",
            <>
              El electricista debe tener licencia del{" "}
              <a
                href="https://www.tdlr.texas.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                TDLR
              </a>{" "}
              (Departamento de Licencias y Regulación de Texas). El plomero debe tener licencia del{" "}
              <a
                href="https://tsbpe.texas.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                TSBPE
              </a>{" "}
              (Junta Estatal de Examinadores de Plomería de Texas) — es una agencia separada del TDLR, y
              ambas licencias se pueden verificar en línea.
            </>,
          ],
          [
            "Contrato por escrito",
            "Completo, antes de entregar cualquier anticipo.",
          ],
        ].map(([title, body], i) => (
          <li key={typeof title === "string" ? title : i} className="rounded-lg border bg-card p-5">
            <p className="font-semibold text-charcoal">
              {i + 1}. {title}
            </p>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{body}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        ¿Se necesita permiso para remodelar una cocina en Fort Worth?
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Generalmente sí, cuando el proyecto modifica la plomería o la electricidad, o cambia paredes o
        pisos en un área de 16 pies cuadrados o más. Si únicamente se cambian gabinetes y cubiertas sin
        tocar instalaciones, muchas veces no se requiere. El{" "}
        <a
          href="https://www.fortworthtexas.gov/departments/development-services/permits/residential-information"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary hover:underline"
        >
          Departamento de Servicios de Desarrollo de la Ciudad de Fort Worth
        </a>{" "}
        confirma los requisitos exactos para su proyecto — pueden cambiar.
      </p>
      <p className="mt-3 rounded-lg border-l-4 border-primary bg-muted p-4 text-sm text-muted-foreground">
        Pregunte directamente si el contratista saca el permiso a su nombre. Si le piden que usted lo
        saque como propietario, entienda lo que eso implica: la responsabilidad ante la ciudad pasa a
        usted, no a la empresa.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        Señales de alerta con los anticipos y pagos
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Un anticipo razonable cubre materiales iniciales, no la mayor parte del trabajo. Los pagos
        posteriores deben ir ligados a etapas terminadas y estar establecidos por escrito en el contrato
        desde el principio.
      </p>
      <ul className="mt-5 space-y-3">
        {[
          "Piden la mitad o más por adelantado",
          "Exigen efectivo y no dan recibo",
          "Piden que el cheque vaya a nombre de una persona, no de la empresa",
          "No hay contrato escrito, solo un acuerdo de palabra",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted-foreground">
        Si algo no le cuadra, la{" "}
        <a
          href="https://www.texasattorneygeneral.gov/consumer-protection/how-avoid-home-improvement-scams"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary hover:underline"
        >
          Oficina del Procurador General de Texas
        </a>{" "}
        publica una guía específica sobre cómo evitar fraudes de mejoras al hogar.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">Un proyecto real</h2>
      <div className="mt-6 rounded-lg border bg-card p-6">
        <div className="flex gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <p className="mt-3 text-charcoal leading-relaxed">
          &ldquo;Nuestra cocina de 1998 estaba atrapada en el pasado. El equipo rediseñó la distribución,
          instaló hermosas cubiertas de cuarzo, y terminó dos días antes de lo previsto. El gerente de
          proyecto nos enviaba actualizaciones por mensaje cada mañana.&rdquo;
        </p>
        <p className="mt-4 text-sm font-semibold text-charcoal">Sarah M. — Keller, TX</p>
        <p className="text-xs text-muted-foreground">
          Remodelación completa de cocina · Reseña original en inglés, traducida aquí
        </p>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Este proyecto fue en Keller, no en Fort Worth — es el testimonio real más cercano que tenemos
        publicado hasta ahora para cocinas. Si quiere ver trabajo terminado específicamente en Fort Worth,
        pregunte por fotos durante su cotización gratuita.
      </p>

      <div className="mt-10 rounded-lg border bg-muted p-6">
        <div className="flex items-start gap-3">
          <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <div>
            <h3 className="font-semibold text-charcoal">
              Coordinamos plomería, electricidad, gabinetes y acabados con un solo gerente de proyecto
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
              Nada se pierde entre oficios, y usted recibe una sola persona de contacto durante todo el
              proyecto — en español, de principio a fin.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-lg bg-primary p-6 text-white sm:p-8">
        <h3 className="text-lg font-semibold">Agende su cotización gratis</h3>
        <p className="mt-2 text-sm text-blue-100 leading-relaxed">
          En su casa, por escrito, detallada línea por línea, y en español si lo prefiere. Sin
          compromiso. Respondemos a cada solicitud dentro de un día hábil.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button size="lg" variant="white" asChild>
            <a href={telHref(company.phone)}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              Llame al {company.phoneDisplay}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            asChild
          >
            <Link href="/es-mx">Solicitar Cotización Gratuita</Link>
          </Button>
        </div>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Vea más detalles de nuestro{" "}
        <Link href="/es-mx/services/kitchen-remodeling" className="font-medium text-primary hover:underline">
          servicio de remodelación de cocinas
        </Link>{" "}
        o de todo lo que hacemos en{" "}
        <Link href="/es-mx/service-areas/fort-worth-tx" className="font-medium text-primary hover:underline">
          Fort Worth, TX
        </Link>
        .
      </p>

      <p className="mt-6 flex items-start gap-2 rounded-lg border bg-muted p-4 text-xs text-muted-foreground">
        <Wrench className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        Nada en esta página es asesoría legal. La información sobre licencias y permisos refleja
        requisitos generales de Texas y Fort Worth al momento de publicarse — confirme siempre los
        detalles específicos de su proyecto con la agencia correspondiente.
      </p>
    </>
  );
}
