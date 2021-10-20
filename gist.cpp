/**
 * @file gist.cpp
 * @author Vikas Kumar
 * @brief 
 * @version 0.1
 * @date 2021-10-20
 * 
 * Pesudo code here 
 * First we create an array of length N
 * if N=1 array is already sorted
 * If N>1 then,
 * we will keep Left = 0, right = N-1
 * then we find the middle element using middle = (left + right)/2
 * then we Call our merge_sort(Arr,left,middle) to sort the first half of the array
 * then we again Call our merge_sort(Arr,middle+1,right) to sort the second half of the array
 * then we again Call our merge(Arr, left, middle, right) to merge sorted arrays in above steps.
 * Exit
 */

#include <iostream>
using namespace std;
void merge(int array[], int left, int mid, int right)
{
    int arr1 = mid - left + 1;
    int arr2 = right - mid;
  
    int *leftArr = new int[arr1]; // to keeping record of left sorted array
    int *rightArr = new int[arr2];// to keeping record of right sorted array
  
    for (int i = 0; i < arr1; i++)
        leftArr[i] = array[left + i];
    for (int j = 0; j < arr2; j++)
        rightArr[j] = array[mid + 1 + j];
  
    int posArr1 = 0, 
        posArr2 = 0;
    int posMerged = left; 

    while (posArr1 < arr1 && posArr2 < arr2) {
        if (leftArr[posArr1] <= rightArr[posArr2]) {
            array[posMerged] = leftArr[posArr1];
            posArr1++;
        }
        else {
            array[posMerged] = rightArr[posArr2];
            posArr2++;
        }
         posMerged++;
    }

    while (posArr1 < arr1) {
        array[posMerged] = leftArr[posArr1];
        posArr1++;
        posMerged++;
    }

    while (posArr2 < arr2) {
        array[posMerged] = rightArr[posArr2];
        posArr2++;
        posMerged++;
    }
}
  
void mergeSort(int array[], int Start, int end)
{
    if (Start >= end){

        return; 
    }
  
    int mid = Start + (end - Start) / 2;
    mergeSort(array, Start, mid);
    mergeSort(array, mid + 1, end);
    merge(array, Start, mid, end);
}
int main(){
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
  
    mergeSort(arr, 0, n - 1);
  
    cout << "\nSorted array is \n";
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
}