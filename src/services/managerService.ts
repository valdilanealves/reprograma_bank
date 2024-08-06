import { Manager } from "../models/managerModel";
import { Client } from "../models/clientModel";

export class ManagerService {
  private managers: Manager[] = [];

  addManager(manager: Manager): void {
    this.managers.push(manager);
  }

  removeManager(managerId: number): void {
    this.managers = this.managers.filter(mgr => mgr.id !== managerId);
  }

  addClient(managerId: number, client: Client): void {
    const manager = this.managers.find(mgr => mgr.id === managerId);
    if (manager) manager.clients.push(client);
  }

  removeClient(managerId: number, clientId: number): void {
    const manager = this.managers.find(mgr => mgr.id === managerId);
    if (manager) manager.clients = manager.clients.filter(cli => cli.id !== clientId);
  }
}

