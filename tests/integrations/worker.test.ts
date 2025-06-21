import { Customer, Pet,  Worker } from "../../generated"
import { CreateWorkerDTO, UpdateWorkerDTO } from "../../src/dto/worker.dto"
import {LoginDTO} from "../../src/dto/login.dto"
import axios from "axios"
import {HashMethods} from "../../src/crypto/hash-password"
import {prisma} from "../setup"
import {url} from "../setup"
import {CreateServiceDTO} from "../../src/dto/service.dto"
import {CreateSchedulingDTO, UpdateSchedulingStatusDTO} from "../../src/dto/scheduling.dto"
import {CreatePurchaseDTO} from "../../src/dto/purchase.dto"
import {CreateProductDTO} from "../../src/dto/product.dto"



let token: string


class WorkerControllerTests {
    static async CreateWorker(body: CreateWorkerDTO): Promise<{status: number, data: {message: string}}> {
        try {
            const response = await axios.post(`${url}/worker/create`, body, {
                headers: { Authorization: `Bearer ${token}` }
            });

            return {
                status: response.status,
                data: response.data
            };
        } catch (error: any) {
            if (error.response) {
                
                return {
                    status: error.response.status,
                    data: {
                        message: error.response.data?.message 
                    }
                };
            }  else {
                return {
                    status: 500,
                    data: {
                        message: "error"
                    }
                };
            }
        }
    }

    static async LoginWorker(body: LoginDTO): Promise<{status: number, data: {token: string}}> {
        const response = await axios.post(`${url}/worker/login`, body, { headers: { 'Content-Type': 'application/json' }})
        return {status: response.status, data: {token: response.data.token}}
    }
    static async GetAllWorkers(): Promise<{status: number, data: Worker[]}> {
        const response = await axios.get(`${url}/worker/all/0/5`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return {status: response.status, data: response.data}
    }
    static async FindOneWorker(email:string): Promise<{status: number, data: Worker}> {
        const response = await axios.get(`${url}/worker/one/${email}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return {status: response.status, data: response.data}
    }
    static async UpdateWorker(body: UpdateWorkerDTO, email: string): Promise<number> {
        const response = await axios.put(`${url}/worker/update/${email}`, body, {
            headers: {Authorization: `Bearer ${token}`}
        })
        return response.status
    }
    static async DeleteWorker(email: string): Promise<number> {
        const response = await axios.delete(`${url}/worker/delete/${email}`,  {
            headers: {Authorization: `Bearer ${token}`}
        })
        return response.status
    }
    static async FindAllPets(): Promise<Pet[]> {
        const response = await axios.get(`${url}/pet/all/0/5`, {
            headers: {Authorization: `Bearer ${token}`}
        })
        return response.data
    }
    static async CreateService(body: CreateServiceDTO): Promise<number> {
        const response = await axios.post(`${url}/service/create`, body ,{
            headers: {Authorization: `Bearer ${token}`}
        })
        return response.status
    }
    static async CreateScheduling(body: CreateSchedulingDTO): Promise<{status: number, data: {message: string, id: string}}> {
        const response = await axios.post(`${url}/scheduling/create`, body, {
            headers: {Authorization: `Bearer ${token}`}
        })
        return {
            status: response.status,
            data: response.data
        }
    }
    static async FindOneScheduling(id: string): Promise<number> {
        const response = await axios.post(`${url}/scheduling/one/${id}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
        return response.status
    }
    static async UpdateScheduling(id: string, body: UpdateSchedulingStatusDTO): Promise<number> {
        const response = await axios.patch(`${url}/scheduling/update/${id}`, body ,{
            headers: {Authorization: `Bearer ${token}`}
        })
        return response.status
    }
    static async CreateProduct(body: CreateProductDTO): Promise<number> {
        const response = await axios.post(`${url}/product/create`, body, {
            headers: {Authorization: `Bearer ${token}`}
        })
        return response.status
    }
    static async CreatePurchase(body: CreatePurchaseDTO, tokenCashier: string): Promise<number> {
        const response = await axios.post(`${url}/purchase/create`, body, {
            headers: {Authorization: `Bearer ${tokenCashier}`}
        })
        return response.status
    }
}



export function generateString(length: number): string {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ' '
    const charactersLength = characters.length
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
}



const workerEmail = "batman@gmail.com"


describe("test workers", () => {
    beforeAll(async () => {
    const name = generateString(50)
    const password = "x[+4[ZC8C8C4Hi"
    const hash = await HashMethods.HashPassword(password)
    const body: CreateWorkerDTO = {email: process.env.REALEMAILMANAGER as string, name: name, password: hash, role: "MANAGER", salary: 1500}
    let manager = await prisma.worker.findFirst({where:{email: body.email}})
    if (!manager) {
        manager = await prisma.worker.create({data: body})
        expect(manager).toMatchObject({email: body.email, name: body.name, role: "MANAGER"})
      }

      const { data } = await WorkerControllerTests.LoginWorker({email: manager.email, password: password})
      token = data.token
    })
    it("create worker", async () => {
        const password = "x[+4[ZC8C8C4Hi"
        const body: CreateWorkerDTO = {
            email: process.env.REALEMAILMANAGER as string,
            name: generateString(20),
            password: password,
            role: "VETERINARIAN",
            salary: 8000
        }
        const {status} = await WorkerControllerTests.CreateWorker(body)
        expect([200, 409]).toContain(status)
    })
    it("get workers", async () => {
        const {data} = await WorkerControllerTests.GetAllWorkers()
        expect(Array.isArray(data)).toBe(true)
    })
    it("get one worker", async () => {
        const hash = await HashMethods.HashPassword("f0C.2v(8/$e7")
        const testWorker: CreateWorkerDTO = {
            email: workerEmail,
            name: generateString(40),
            password: hash,
            role: "SERVICEPROVIDER",
            salary: 4900
        }
        const {status, data} = await WorkerControllerTests.CreateWorker(testWorker)
        expect([200, 409]).toContain(status)
        const res = await WorkerControllerTests.FindOneWorker(workerEmail)
        expect(res.status).toBe(200)
        expect(res.data.email).toBe(testWorker.email)
    })
    it("update worker", async () => {
        const updateWorker: UpdateWorkerDTO = {
            salary: 3000
        }
        const status = await WorkerControllerTests.UpdateWorker(updateWorker, workerEmail)
        expect(status).toBe(200)
    })
    it("delete worker", async () => {
        const workerDeletedEmail = "workerdeleted@gmail.com"
        const hash = await HashMethods.HashPassword("f0C.2v(8/$e7")
        const workerDeleted: CreateWorkerDTO = {
            email: workerDeletedEmail,
            name: "workerdeletedasideakdijksaidjai",
            password: hash,
            role: "VETERINARIAN",
            salary: 9000
        }
        const res = await WorkerControllerTests.CreateWorker(workerDeleted)
        expect([200, 409]).toContain(res.status)
        const status = await WorkerControllerTests.DeleteWorker(workerDeleted.email)
        expect(status).toBe(200)
    })
    
})


describe("test pets ", () => {
    it("find all pets", async () => {
        const pets = await WorkerControllerTests.FindAllPets()
        expect(pets.length).toBeGreaterThan(0)
        expect(pets[0]).toHaveProperty("name")
        expect(pets[0]).toHaveProperty("race")
    })
})

describe("test services", () => {
    it("create one service", async () => {
        const body: CreateServiceDTO = {
            description: "workers are going to bathe your pet",
            name: "bathTest",
            price: 30
        }
        const status = await WorkerControllerTests.CreateService(body)
        expect(status).toBe(200)
    })
})


describe("test products", () => {
    it ("create product", async () => {
        const productBody: CreateProductDTO = {
            description: "a bone for your dog",
            name: "boneTest",
            price: 3,
            quantity: 10
        }
        const status = await WorkerControllerTests.CreateProduct(productBody)
        expect(status).toBe(200)
    })
})


describe("test scheduling",  () => {
    let idScheduling: string
    const worker1: {email: string, id: string} = {email: `worker1${Date.now()}@gmail.com`, id: ""}
    const worker2: {email: string, id: string} = {email: `worker2${Date.now()}@gmail.com`, id: ""}
    it("create one scheduling", async () => {
        const email = "customerscheduling@gmail.com"
        const hash = await HashMethods.HashPassword("x[+4[ZC8C8C4Hi")
        let customer = await prisma.customer.findFirst({where:{email}})
        if (!customer) {
            customer = await prisma.customer.create({
            data: {
                email: email,
                address: generateString(30),
                name: generateString(20),
                password: hash
            }
        })
        } 
        let service = await prisma.service.findFirst({where:{name: "GROOMMING"}})
        if (!service) {
            service = await prisma.service.create({data: {description: generateString(20),name: "GROMMING",price: 50}})
        }
        
        let pet = await prisma.pet.findFirst({where:{name: "bob", customerID: customer.id}})
        if (!pet) {
            pet = await prisma.pet.create({data: {name: "bob", dateOfBirth: new Date("2023-01-01"), race: "rotweiller", species: "dog", weight: 20, customer: {
            connect: {
                id: customer.id
            }
         }}})
        }

        
        const workers: Worker[] = await Promise.all([
            prisma.worker.create({data: {email:worker1.email, name: generateString(30), password: hash, role: "SERVICEPROVIDER", salary: 2000}}),
            prisma.worker.create({data: {email: worker2.email, name: generateString(30), password: hash, role: "SERVICEPROVIDER", salary: 2000}})
            ]
        )

        worker1.id = workers[0].id
        worker2.id = workers[1].id


        
        

        const body: CreateSchedulingDTO = {
            date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(),
            petID: pet.id,
            serviceID: service.id,
            workersIds: workers.map(element => {
                return element.id
            })
        }

        const {status, data} = await WorkerControllerTests.CreateScheduling(body)
        expect(status).toBe(200)
        
        idScheduling = data.id
                
    })
    it("update one scheduling status", async () => {
        const body: UpdateSchedulingStatusDTO = {
            status: "CANCELED"
        }
        const status = await WorkerControllerTests.UpdateScheduling(idScheduling, body)
        expect(status).toBe(200)
    })
    afterAll(async () => {
        const workersIds = [worker1.id, worker2.id]
        await prisma.$transaction(async (tx) => {
            await tx.workersOnSchedulings.deleteMany({
            where: { workerID: { in: workersIds } }
            })

            await tx.worker.deleteMany({
            where: { id: { in: workersIds } }
            })
        })
    })
})

describe("test purchases", () => {
    let customerID: string
    const cashierEmail = "cashier123456@gmail.com"
    it("create purchase", async () => {
        const hash = await HashMethods.HashPassword("0qxZE|b!1B!2")
        const customerEmail = "customerForPurchase123456@gmail.com"
        let customer = await prisma.customer.findFirst({where:{email: customerEmail}})
        if (!customer) {
            customer = await prisma.customer.create({data:{
                address: generateString(30),
                email: customerEmail,
                name: generateString(40),
                password: hash
            }})
        }

        await prisma.worker.create({data: {
            email: cashierEmail,
            name: "cashierForTest",
            password: hash,
            role: "CASHIER",
            salary: 1500,
        }})

        customerID = customer.id
        let product = await prisma.product.findFirst({where:{name: "boneTest"}})
        if (!product) {
            throw new Error("product doesn't exist")
        }
        
        const responseBody = await WorkerControllerTests.LoginWorker({email: cashierEmail, password: "0qxZE|b!1B!2"})
        
        const purchaseCreateDTO: CreatePurchaseDTO = {
            customerID: customer.id,
            products: [{productID: product.id, quantity: 2}]
        }

        const status = await WorkerControllerTests.CreatePurchase(purchaseCreateDTO, responseBody.data.token)
        expect(status).toBe(200)
    })
    afterAll(async () => {
        await prisma.productsOnPurchase.deleteMany({
        where: {
            purchase: {
            customerID: customerID,
                }
            }
        })
        await prisma.purchase.deleteMany({where:{customerID: customerID }})
        await prisma.product.deleteMany({where:{name: "boneTest"}})
        await prisma.worker.delete({where:{email: cashierEmail}})
    })
})

