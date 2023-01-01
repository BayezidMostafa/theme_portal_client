import { useEffect, useState } from "react";


const useDeveloper = email => {
    const [developer, setDeveloper] = useState(false);
    const [developerLoading, setDeveloperLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/developer/${email}`)
                .then(res => res.json())
                .then(data => {
                    setDeveloper(data.developer);
                    setDeveloperLoading(false);
                })
        }
    }, [email])
    return [developer, developerLoading]
}
export default useDeveloper;