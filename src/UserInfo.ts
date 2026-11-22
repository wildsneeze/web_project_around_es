export interface UserData {
  name: string;
  job: string;
}

export interface UserInfoSelectors {
  nameSelector: string;
  jobSelector: string;
}

export class UserInfo {
  private nameElement: HTMLElement;
  private jobElement: HTMLElement;

  constructor({ nameSelector, jobSelector }: UserInfoSelectors) {
    this.nameElement = document.querySelector(nameSelector) as HTMLElement;
    this.jobElement = document.querySelector(jobSelector) as HTMLElement;
  }

  public getUserInfo(): UserData {
    return {
      name: this.nameElement.textContent,
      job: this.jobElement.textContent,
    };
  }

  public setUserInfo({ name, job }: UserData) {
    this.nameElement.textContent = name;
    this.jobElement.textContent = job;
  }
}
