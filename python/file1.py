print("hello world")


print("dvsf  d")


print("hescscsccscs")

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
        


class Animal:
    def __init__(self,name,color):
        self.name = color
        self.color = color
    def sound():
        return "Animal Sound"
    def walk():
        return "Animal walk"
    

class Dog (Animal):
    def __init__(self, name, color):
        super().__init__(name, color)

    def sound(self):            #overriding
        return "HAW HAW"
    