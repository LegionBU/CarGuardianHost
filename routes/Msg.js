import message from "./message";

let existing = await Msg.find({
});

if (!existing) {
    return res.status(401).json({
        error: true,
        message: "Invalid Recipient ID",
    });
}
else{
    return res.status(200).json({
        error: false,
        message: message,
    })
}