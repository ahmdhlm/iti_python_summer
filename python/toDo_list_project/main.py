#features
# 1 - add tasks to a list 
# 2 - marl task as complete
# 3 - view tasks
# 4 - Quit
def add_task():
    #get task from user
    task = input("Enter task: ")
    
    #define task statues
    task_info = {"task": task, "completed":False}

    #add task to lists of tasks 
    tasks.append(task_info)
    print("Task is added to the list successfully")
    # print (tasks)

def mark_task_complete():    
    # get list of incomplete tasks
    incomplite_tasks = [task for task in tasks if task["completed"] == False]
    # print(incomplite_tasks)

    if len(incomplite_tasks) ==0:
        print("No Tasks to mark as complete")
        return


    # show incomplete tasks to users
    for i, task in enumerate(incomplite_tasks):
        print(f'{i + 1} - {task["task"]}')
        print('-'*40)    

    # get the task from the user
    task_no =int(input("choose task to complete: "))

    # mark task as completed
    incomplite_tasks[task_no - 1]["completed"] = True
    
        

    # print successful to the user
    print("tasks marked completed")

def view_tasks():
    if not tasks:
        print("no tasks to be viewed")

    for i, task in enumerate(tasks):
        status = "✔️" if task["completed"] else "❌"
        # if task["completed"]:
        #     status = "✔️"
        # else:
        #     status = "❌"
        print(f'{i + 1} - {task["task"]} {status}')
        print('-'*40)
        
    



message ="""
1 - add tasks to a list 
2 - mark task as complete
3 - view tasks
4 - Quit
"""

tasks =[]
while True:
    print(message)
    choice = input ("Enter Your Choice:  ")

    if choice =="1":        
        add_task()
    elif choice =="2":
        mark_task_complete()
    elif choice =="3":
        view_tasks()
    elif choice =="4":
        break
    else :
        print("Invalid choice , please enter a number between 1 and 4")