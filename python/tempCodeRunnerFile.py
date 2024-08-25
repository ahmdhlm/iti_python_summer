class Employee:
    def __init__(self,name,age):
        self.__name = name
        self.__age = age

    def __str__(self) -> str:
        return f"{self.__name} : {self.__age}"

    @property
    def name(self):
        return self.__name
    # @name.setter
    # def name(self,name):
    #     if (__name.is)


emp1 = Employee("Ahmed",25)
print (emp1)