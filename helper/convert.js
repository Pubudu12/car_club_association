import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";

const Convert = {
    html: (content) => {
        if (!content) return
        
        const change = content.replaceAll("(/uploads", `(${process.env.NEXT_PUBLIC_END_POINT}/uploads`)
        const markdown = {
            description: change
        }
        return <ReactMarkdown children={markdown.description} rehypePlugins={[rehypeRaw]} />
    }
}

export default Convert