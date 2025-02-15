import { useInView } from "react-intersection-observer"


export const useElementInView = () => {
    const {inView, ref} = useInView ({threshold: 0.5})
    return {inView, ref}
}