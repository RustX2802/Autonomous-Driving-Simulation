# Autonomous Driving Simulation
## Car Brain Storage
This repository contains code for storing and managing a car's brain in local storage using JavaScript. The car's brain is represented by a neural network, and this code allows you to save and discard the neural network as needed.

## Instructions
To store a car's brain in local storage, follow these steps:

1. Open the browser console.
2. Call the `save()` method.
   
To discard the stored neural network, follow these steps:

1. Open the browser console.
2. Call the `discard()` method.
   
## Adjusting Simulation Parameters
You can customize the simulation by adjusting the following parameters:

* Number of Cars Simulated in Parallel (N): To change the number of cars simulated in parallel, modify the value of `N` on line 9 in the code.
* Mutation Amount: To modify the mutation amount, update the value of `mutationAmount` on line 20 in the code.

## Changing Neural Network and Sensor Properties
If you want to change the properties of the neural network or the sensor, you need to discard the old ones from local storage. Follow these steps:

1. Open the browser console.
2. Call the `discard()` method.
   
By discarding the old properties, you ensure that the updated neural network and sensor properties are used in the simulation.

## Demo:

https://github.com/RustX2802/Autonomous-Driving-Simulation/assets/72299347/4fa715b7-14b8-402b-9f47-643af4fe1fc7
