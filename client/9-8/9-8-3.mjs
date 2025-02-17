const createRecord = async (inputBody) => {
    const fetchResult = await fetch("http://localhost:3000/api/9-7", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(inputBody),
    })
    const responsce = await fetchResult.json()
    if (responsce.status !== "success") {
    throw new Error(responsce.status)
    }
    alert("登録が完了しました！")
    }
    const getFormData = () => {
        const inputFormElement = document.getElementById("input-form").elements
        const id = parseInt(inputFormElement.id.value)
        const user_id = parseInt(inputFormElement.user_id.value)
        const year = parseInt(inputFormElement.year.value)
        const month = parseInt(inputFormElement.month.value)
        const day = parseInt(inputFormElement.day.value)
        const name = inputFormElement.name.value
        const score = parseInt(inputFormElement.score.value)

        if (!id) {
            throw new Error("IDは必須です")
        }
        if (!user_id) {
            throw new Error("USER_IDは必須です")
        }
        if (!year) {
            throw new Error("YEARは必須です")
        }
        if (!month) {
            throw new Error("MONTHは必須です")
        }
        if (!day) {
            throw new Error("dayは必須です")
        }
        if (!name) {
            throw new Error("名前は必須です")
        }
        if (!score) {
            throw new Error("SCOREは必須です")
        }
        return {
            id,
            user_id,
            year,
            month,
            day,
            name,
            score,            
        }
    }
    const clearFormData = () => {
        const inputFormElement = document.getElementById("input-form").elements
        inputFormElement.name.value = ""
        inputFormElement.id.value = ""
        inputFormElement.user_id.value = ""
        inputFormElement.year.value = ""
        inputFormElement.month.value = ""
        inputFormElement.day.value = ""
        inputFormElement.score.value = ""
    }
    /**
    * ウィンドウ読み込み時の処理
    */
    window.onload = () => {
        const createButtonElement = document.getElementById("create-button")
        createButtonElement.addEventListener(
        "click",
        async () => {
            try {
                const intutBody = getFormData()
                await createRecord(intutBody)
                clearFormData()
            } catch (err) {
                alert(err)
                }
            },
                false,
            )
    }
        