function selectionSort()
{
    document.getElementById("worst_case").innerHTML="O(N^2)";
    document.getElementById("average_case").innerHTML="O(N^2)";
    document.getElementById("best_case").innerHTML="O(N^2)";
    document.getElementById("space_worst_case").innerHTML="O(1)";
    disable_ip();
    for(let i=0;i<array_size;i++)
    {
        let j=i;
        let prevmin=j;
        box_update(box[i],box_sizes[i],"yellow",i,j);
        for(j=i+1;j<array_size;j++)
        {
            box_update(box[j],box_sizes[j],"blue",i,j);
            if(box_sizes[j]<box_sizes[prevmin])
            {
                box_update(box[j],box_sizes[j],"red",i,j);
                if(prevmin!=i)
                    box_update(box[prevmin],box_sizes[prevmin],"white",i,prevmin);
                prevmin=j;
            }
            else
            {
                box_update(box[j],box_sizes[j],"white",i,j);
            }
        }
        let temp=box_sizes[prevmin];
        box_sizes[prevmin]=box_sizes[i];
        box_sizes[i]=temp;
        box_update(box[prevmin],box_sizes[prevmin],"white",i,prevmin); 
        box_update(box[i],box_sizes[i],"rgb(61, 250, 4)",i,i);
    }
}