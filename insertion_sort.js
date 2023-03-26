function insertionSort()
{
    document.getElementById("worst_case").innerHTML="O(N^2)";
    document.getElementById("average_case").innerHTML="O(N^2)";
    document.getElementById("best_case").innerHTML="O(N)";
    document.getElementById("space_worst_case").innerHTML="O(1)";
    disable_ip();
    console.log("Calling");
    box_update(box[0],box_sizes[0],"blue",0,0);
    for(let i=1;i<array_size;i++)
    {
        let j=i;
        box_update(box[i],box_sizes[i],"yellow",i,j);
        while(j>0 && box_sizes[j]<box_sizes[j-1])
        {
            box_update(box[j],box_sizes[j],"red",i,j);
            box_update(box[j-1],box_sizes[j-1],"red",i,j-1);
            let temp=box_sizes[j];
            box_sizes[j]=box_sizes[j-1];
            box_sizes[j-1]=temp;
            box_update(box[j],box_sizes[j],"red",i,j);
            box_update(box[j-1],box_sizes[j-1],"red",i,j-1);
            box_update(box[j],box_sizes[j],"blue",i,j);
            j--;
        }
        box_update(box[j],box_sizes[j],"blue",i,j);
    }
}