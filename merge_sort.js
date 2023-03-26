function mergeSort()
{
    disable_ip();
    document.getElementById("worst_case").innerHTML="O(N*Log(N))";
    document.getElementById("average_case").innerHTML="O(N*Log(N))";
    document.getElementById("best_case").innerHTML="O(N*Log(N))";
    document.getElementById("space_worst_case").innerHTML="O(N)";
    divide(0,array_size-1);
}
function merge(l,m,r)
{
    let i=l,j=m+1,k=0;
    let nums=[];
    for(let it=l;it<=r;it++)
    {
        if(i>m)
        {
            box_update(box[j],box_sizes[j],"green",j,j);
            nums[k++]=box_sizes[j++];
        }
        else if(j>r)
        {
            box_update(box[i],box_sizes[i],"green",i,i);
            nums[k++]=box_sizes[i++];
        }
        else if(box_sizes[i]>box_sizes[j])
        {
            box_update(box[j],box_sizes[j],"green",j,j);
            nums[k++]=box_sizes[j++];
        }
        else
        {
            box_update(box[i],box_sizes[i],"green",i,i);
            nums[k++]=box_sizes[i++];
        }
    }
    for(let i=0;i<k;i++)
    {
        box_sizes[l++]=nums[i];
        box_update(box[l-1],box_sizes[l-1],"red",l-1,l-1);
    }
}
function divide(l,r)
{
    if(l<r)
    {
        let m=Math.floor(l+(r-l)/2);
        box_update(box[m],box_sizes[m],"blue",m,m);
        divide(l,m);
        divide(m+1,r);
        merge(l,m,r);
    }
}