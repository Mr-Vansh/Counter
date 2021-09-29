let count=0;
        function increment(){
            count+=1;
            document.getElementById('count').innerHTML=count;
        }
        function decrement(){
            count-=1;
            document.getElementById('count').innerHTML=count;
        }