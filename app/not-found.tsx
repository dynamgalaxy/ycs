import Link from "next/link";

export default function NotFound() {
  return <section className="wrap not-found"><h1>404</h1><p>Looks like this frame got left on the cutting room floor.</p><Link className="button button-fill" href="/projects">Back to the work</Link></section>;
}
