function updateScreen(value)
{
    const ScreenElement = document.querySelector('.screen'); // query selector is screen coz we wanna display on screen
    const currentText = ScreenElement.textContent;
    ScreenElement.textContent += value; //adding value to the screen 
    if(value === "AC")
        {
            ScreenElement.textContent = '';
        }
    else if(value == "CE")
        {
            const newText = currentText.slice(0, -1); 
            //ScreenElement.textContent is used though currentText has same meaning becoz like python here this is mutable 
            // any changes to copy will change the original one not cpy 
            ScreenElement.textContent = newText;        
        }
    else if (value == "=")
        {
            try
            {
                ScreenElement.textContent = eval(currentText.replace(/x/g, '*'));
            }
            catch(e)
            {
                ScreenElement.textContent = "Syntax Error"; 
            }
        }
}