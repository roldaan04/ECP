/**
 * Inserta un grafo JSON-LD (server). Escapa «<» para evitar inyección en el script.
 * @param {{ data: object }} props
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
