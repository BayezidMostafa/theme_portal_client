import { useEffect, useState } from "react"

const useDeveloper = email => {
    const [developer, setDeveloper] = useState(false);
    const [developerLoading, setDeveloperLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setDeveloper(data.seller);
                    setDeveloperLoading(false);
                })
        }
    }, [email])
    return [developer, developerLoading]
}
export default useDeveloper;