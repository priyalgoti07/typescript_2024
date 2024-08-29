import { Children, ReactNode } from "react"

type PropsType = {
    heading: string,
    footer?: string,
    func: (a: string, b: number) => void,
    children: ReactNode
}

const Box = ({ heading, footer, func, children }: PropsType) => {
    func("MAhadev", 12)

    return (
        <div>
            <h1>{heading}</h1>
            <h1>{footer && footer}</h1>
            {children}
        </div>
    )
}

export default Box