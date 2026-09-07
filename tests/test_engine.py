import unittest
from engine import TimeSeriesAnalyticsEngine
class TestEngine(unittest.TestCase):
    def setUp(self):
        self.e=TimeSeriesAnalyticsEngine()
        self.e.insert(100,20.5)
        self.e.insert(200,30)
        self.e.insert(300,15.5)
    def test_query(self):
        self.assertEqual(self.e.query(100,200),[20.5,30])
    def test_average(self):
        self.assertEqual(self.e.average(100,300),22)
    def test_extremes(self):
        self.assertEqual(self.e.extremes(100,300),{"min":15.5,"max":30})
    def test_export(self):
        self.assertEqual(self.e.export()["count"],3)
if __name__=="__main__":
    unittest.main()
