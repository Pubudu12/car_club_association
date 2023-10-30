export const sendContactForm = async (data) =>
    fetch("/api/sendmail", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
    }).then((res) => {
        // if (!res.ok) throw new Error("Failed to send message - - - - - - - - -");
        console.log('message OK - Then', res)
        return res.json();
    }).catch((error) => {
        console.log('upate failed',error);
        return error;
    });