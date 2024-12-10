export interface Dictionary {
  navigation: {
    home: string
    about: string
    team: string
    blog: string
    contact: string
  }
  home: {
    title: string
    subtitle: string
    description: string
    cta: string
  }
  about: {
    title: string
    mission: string
    missionText: string
    vision: string
    visionText: string
    help: string
    helpText: string
  }
  team: {
    title: string
    subtitle: string
    lawyer: {
      name: string
      position: string
      education: string[]
      experience: string[]
      languages: string
    }
  }
  contact: {
    title: string
    subtitle: string
    form: {
      name: string
      email: string
      phone: string
      message: string
      submit: string
    }
    info: {
      title: string
      phone: string
      email: string
      schedule: string
      scheduleText: string
    }
  }
  footer: {
    description: string
    contact: string
    followUs: string
    rights: string
  }
}
