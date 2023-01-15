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
        
def getProbability(parameter): 
    currentPath = os.getcwd() # + "/api-server"

    device = "cuda" if torch.cuda.is_available() else "cpu"
    model = CustomModel().to(device)

    model_state_dict = torch.load(currentPath + "/model/model_state_dict.pt", map_location=device)
    model.load_state_dict(model_state_dict)

    with torch.no_grad():
        model.eval()
        inputs = torch.FloatTensor(
            parameter
        ).to(device)
        outputs = model(inputs)

        # print("---------")
        # print(outputs)
        # print(outputs >= torch.FloatTensor([0.5]).to(device))
    
    return float(str(outputs)[8:12])*100
