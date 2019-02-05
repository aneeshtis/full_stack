class csvBase:
    import pandas as pd
    df = pd.read_csv("demo_csv.csv")
    def getDataFile(self):
        return self.df
#End csvBase

class csvDer(csvBase):
    def getCsv(self, df):
        print(df)
    def getName(self, df):
        print(df.Name)
#end csvDer

drc = csvDer()
drc.getName(drc.df)
    