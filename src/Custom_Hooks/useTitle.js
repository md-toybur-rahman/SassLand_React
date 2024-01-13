import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `SassLand | ${title}`
    }, [title])
};

export default useTitle;