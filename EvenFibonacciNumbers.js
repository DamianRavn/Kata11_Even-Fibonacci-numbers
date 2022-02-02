function Fib()
{
    const maxValue = 4000000;
    let evenValueSum = 0;
    let lastTermValue = 1;
    let currentTermValue = 2;

    while(currentTermValue <= maxValue)
    {
        if (currentTermValue % 2 == 0) 
        {
            evenValueSum += currentTermValue;
        }
        const tmpTerm = currentTermValue + lastTermValue;
        lastTermValue = currentTermValue;
        currentTermValue = tmpTerm;
    }
    console.log(evenValueSum);
}

Fib();