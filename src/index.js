module.exports = function toReadable (number) {
    const string_numbers = new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
        [5, 'five'],
        [6, 'six'],
        [7, 'seven'],
        [8, 'eight'],
        [9, 'nine'],
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'],
        [16, 'sixteen'],
        [17, 'seventeen'],
        [18, 'eighteen'],
        [19, 'nineteen'],
        [20, 'twenty'],
        [30, 'thirty'],
        [40, 'forty'],
        [50, 'fifty'],
        [60, 'sixty'],
        [70, 'seventy'],
        [80, 'eighty'],
        [90, 'ninety']
    ]);
    let readable_number = '';
    let index = 0;
    while (number>=1)
    {
        console.log('NUMBER:', number)
        if(index==1){
            readable_number = `${string_numbers.get(~~(number)%10)} hundred` + (readable_number ? ` ${readable_number}` : '')
            break;
        }
        else if((number%100)>19){
            readable_number = `${string_numbers.get(~~(number%100/10)*10)}${number%10>=1 ? ` ${string_numbers.get(number%10)}` : ''}` + readable_number 
            number=number/100;
            index=1;
        }
        else if(number%100!=0){
            readable_number = `${string_numbers.get(number%100)}` + readable_number 
            number=number/100;
            index=1;
        }
        else{
            number=number/100;
            index=1;
        }
    }
    return  readable_number == '' ? 'zero' : readable_number;
}
