import { slugify } from "../utils"

export function Question({ id, question, description, ...rest }) {
    const slug = slugify(`${rest.category}-${id}`)

    return (
        <div>
            <p className="text-lg text-gray-800 font-semibold">
                {id}. {question}
            </p>
            <p className="text-sm tracking-wide text-gray-500 max-w-3xl">
                {description}
            </p>
            <p>{rest.response}</p>
        </div>
    )
}
