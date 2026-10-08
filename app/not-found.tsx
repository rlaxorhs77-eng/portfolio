import { ui } from "@/content/site";

export default function NotFound() {
  return <main className="container section">
    <h1>{ui.notFoundTitle}</h1>
    <p className="lead" style={{ marginTop: 20 }}>{ui.notFoundDescription}</p>
    <div className="cta-row"><a href="/" className="button button-primary">{ui.backHome}</a></div>
  </main>;
}
