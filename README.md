# NavigationDemo
Bottom Navigator Structure
-> Tab1
-> Tab2
-> Tab3
-> Tab4--> 1.Tab4Main Screen
           2.Profile Screen
           
Functionality on modal
X-> close the Modal
Button->Navigate to Tab1-> 1.will go back to Tab1
                           2.Will close the modal
Button->Navigate to Profile-> 1.Will navigate nested stack: Profile Screen in nested stack
                              2.Will close the modal
Note: setTimeOut is used to cause a delay of 5 milliseconds between the closing of the Modal and navigation operation. 
This has been done intentionally to avoid problems with interactions manager as two interactions are being performed simultaneously
