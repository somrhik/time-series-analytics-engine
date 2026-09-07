class TimeSeriesAnalyticsEngine:
    def __init__(self):
        self.series=[]
    def insert(self,timestamp,value):
        self.series.append({"t":timestamp,"v":value})
        self.series.sort(key=lambda x:x["t"])
        return {"status":"ok","timestamp":timestamp}
    def query(self,start,end):
        return [p["v"] for p in self.series if start<=p["t"]<=end]
    def average(self,start,end):
        values=self.query(start,end)
        return sum(values)/len(values) if values else 0.0
    def extremes(self,start,end):
        values=self.query(start,end)
        return {"min":min(values),"max":max(values)} if values else {"min":None,"max":None}
    def export(self):
        return {"data":self.series,"count":len(self.series)}
