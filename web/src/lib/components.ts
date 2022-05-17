import htm from "htm"
import vhtml from "vhtml"
import { uriLooksSafe } from "@portabletext/to-html"

const html = htm.bind(vhtml)
export const portableTextComponents = {
  marks: {
    link: ({children, value}) => {
      const href = value.href || ""
      if (uriLooksSafe(href)) {
        const rel = href.startsWith("/") ? undefined : "noreferrer"
        return `
          <a
            href="${href}"
            rel="${rel}"
            class="color-850 underline"
            target="_blank"
          >${children}</a>
        `
      }
      return children
    }
  }
}
