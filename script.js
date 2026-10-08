const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const gif = document.getElementById("gif");

// 'NO' ခလုတ်နှိပ်တိုင်း ပြောင်းလဲမယ့် စာသားများနှင့် GIF များ
const steps = [
    {
        text: "ချစ်လိုက်ပါနော် 🥺",
        gif: "https://media.giphy.com/media/c84A59K64IeK0E3a9e/giphy.gif"
    },
    {
        text: "ချစ်ရင် မုန့်တွေကျွေးမှာ 🥺",
        gif: "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
    },
    {
        text: "လူလဲစားရမှာနော် 😳",
        gif: "https://media.giphy.com/media/K1tgb1IUeBO4X2D0Lp/giphy.gif"
    },
    {
        text: "လက်ခံလိုက်ပါတော့ 🥺",
        gif: "https://media.giphy.com/media/26hpKMT7M4SOTF5aE/giphy.gif"
    },
    {
        text: "မငြင်းပါနဲ့ 💔",
        gif: "https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif"
    },
    {
        text: "Just say Yes 🥺",
        gif: "https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif"
    }
];

let currentStep = 0;
let yesSize = 16; // YES Button ရဲ့ စတင် Font Size

noBtn.addEventListener("click", () => {
    if (currentStep < steps.length) {
        // စာသားနှင့် GIF ပြောင်းခြင်း
        question.innerText = steps[currentStep].text;
        gif.src = steps[currentStep].gif;
        
        // YES ခလုတ်ကို ပိုကြီးအောင် လုပ်ခြင်း
        yesSize += 10;
        yesBtn.style.fontSize = `${yesSize}px`;
        yesBtn.style.padding = `${10 + (currentStep * 5)}px ${25 + (currentStep * 10)}px`;

        currentStep++;
    } else {
        // နောက်ဆုံးအဆင့်တွင် NO ခလုတ်မပါတော့ဘဲ မေးခွန်းအတင်းမေးခြင်း
        question.innerText = "ok ok ချစ်တယ်လို့လိုက်ပြောပေးမယ်နော် ❤️";
        noBtn.style.display = "none";
    }
});

// YES ခလုတ်ကို နှိပ်လိုက်ပါက
yesBtn.addEventListener("click", () => {
    question.innerText = "Yay! ချစ်တယ်ဆိုတာ သိပြီးသားပါ 🥰❤️";
    gif.src = "https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif";
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
});
