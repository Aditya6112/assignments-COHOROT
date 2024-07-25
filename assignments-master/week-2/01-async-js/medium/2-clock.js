// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function padZero(num) {
    return num < 10 ? '0' + num : num;
}
function formatTime() {
    const now = new Date();
    
    // 24-hour format
    const hours24 = padZero(now.getHours());
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds());
    const time24 = `${hours24}:${minutes}:${seconds}`;

    // 12-hour format
    let hours12 = now.getHours();
    const ampm = hours12 >= 12 ? 'PM' : 'AM';
    hours12 = hours12 % 12;
    hours12 = hours12 ? hours12 : 12; // the hour '0' should be '12'
    const time12 = `${padZero(hours12)}:${minutes}:${seconds} ${ampm}`;

    return { time24, time12 };
}

function displayTime() {
    const { time24, time12 } = formatTime();
    console.clear();
    console.log(`24-hour format: ${time24}`);
    console.log(`12-hour format: ${time12}`);
}
// Update the time every second
setInterval(displayTime, 1000);