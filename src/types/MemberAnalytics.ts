export interface MemberAnalytics {
    Region: Region;
    Council?: Council;
    Section?: Section;
    "Member/Customer Number"?: number;
    "Last Name"?: string;
    "First Name"?: string;
    "Middle Name"?: string;
    "Name Prefix"?: string;
    "Name Suffix"?: string;
    "Email Address"?: string;
    Grade?: Grade;
    "Grade Effective Date"?: string;
    "Grade History"?: string;
    Gender?: Gender;
    "IEEE Status"?: IEEEStatus;
    "Renew Year"?: string;
    "Company/Attention"?: CompanyAttention;
    Location?: string;
    City?: string;
    "State/Province"?: string;
    "Postal Code"?: string;
    Country?: Country;
    "Work Number "?: string;
    "Home Number "?: string;
    "Technology Focus Area"?: TechnologyFocusArea;
    "Society List"?: SocietyList;
    "HKN Code"?: string;
    "HKN Name"?: string;
    "HKN Induction Date"?: string;
    "Contiguous Flag"?: ContiguousFlag;
    "ok for local activities"?: Ok;
    "ok to contact"?: Ok;
}

export enum CompanyAttention {
    CompanyAttentionINSAT = "INSAT",
    CompanyAttentionInsat = "Insat",
    Empty = "",
    IEEEComputerSocietyChapterINSAT = "IEEE Computer Society Chapter - INSAT",
    IEEEINSATStudentBranch = "IEEE INSAT Student Branch",
    IEEEInsatStudentBranch = "IEEE INSAT STUDENT BRANCH",
    Insat = "insat",
    MinistryOfDefense = "Ministry of defense",
    Nnnn = "nnnn",
}

export enum ContiguousFlag {
    N = "N",
}

export enum Council {
    AfricaCouncil = "Africa Council",
    Empty = "",
}

export enum Country {
    Tunisia = "Tunisia",
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "Unknown",
}

export enum Grade {
    GraduateStudentMember = "Graduate Student Member",
    Member = "Member",
    StudentMember = "Student Member",
}

export enum IEEEStatus {
    Active = "Active",
}

export enum Region {
    Empty = "",
    R8 = "R8",
}

export enum Section {
    Empty = "",
    TunisiaSection = "Tunisia Section",
}

export enum SocietyList {
    Empty = "",
    Memc016 = "MEMC016",
    Memc016Memia034 = "MEMC016, MEMIA034",
    Mememb018 = "MEMEMB018",
    Mememb018Memnps005 = "MEMEMB018, MEMNPS005",
    Mememb018Mempe031 = "MEMEMB018, MEMPE031",
    Memia034 = "MEMIA034",
    Memia034Memnps005 = "MEMIA034, MEMNPS005",
    Memia034Memnps005Mempe031 = "MEMIA034, MEMNPS005, MEMPE031",
    Memia034Mempe031 = "MEMIA034, MEMPE031",
    Memnps005 = "MEMNPS005",
    Memnps005Mempe031 = "MEMNPS005, MEMPE031",
    Memnps005Memra024 = "MEMNPS005, MEMRA024",
    Mempe031 = "MEMPE031",
    Memra024 = "MEMRA024",
}

export enum TechnologyFocusArea {
    Aerospace = "Aerospace",
    Bioengineering = "Bioengineering",
    CommunicationNetworkingAndBroadcasting = "Communication, Networking and Broadcasting",
    ComponentsCircuitsDevicesAndSystems = "Components, Circuits, Devices and Systems",
    ComputingAndProcessingHardwareSoftware = "Computing and Processing (Hardware/Software)",
    EngineeredMaterialsDielectricsAndPlasmas = "Engineered Materials, Dielectrics and Plasmas",
    EngineeringProfession = "Engineering Profession",
    FieldsWavesAndElectromagnetics = "Fields, Waves and Electromagnetics",
    GeneralTopicsForEngineersMathScienceAndEngineering = "General Topics for Engineers (Math, Science and Engineering)",
    NuclearEngineering = "Nuclear Engineering",
    Other = "Other",
    PowerEnergyAndIndustryApplications = "Power, Energy and Industry Applications",
    RoboticsAndControlSystems = "Robotics and Control Systems",
}

export enum Ok {
    No = "No",
    Yes = "Yes",
}
