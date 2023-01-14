import torch
from torch import nn
import os

class CustomModel(nn.Module):
    def __init__(self):
        super(CustomModel, self).__init__()
        self.layer = nn.Sequential(
        nn.Linear(3, 1),
        nn.Sigmoid()
        )

    def forward(self, x):
        x = self.layer(x)
        return x
        
def test2(): 
    currentPath = os.getcwd() #+ "/api-server"

    device = "cuda" if torch.cuda.is_available() else "cpu"
    model = torch.load(currentPath + "/model/model.pt", map_location=device)

    with torch.no_grad():
        model.eval()
        inputs = torch.FloatTensor(
            [89, 92, 75]
        ).to(device)
        outputs = model(inputs)

        print("---------")
        print(outputs)
        print(outputs >= torch.FloatTensor([0.5]).to(device))
        return outputs
