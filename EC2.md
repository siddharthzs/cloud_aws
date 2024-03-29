# Elastic Compute Cloud (EC2)
secure, resizable compute capacity in the cloud
like a VM, only hosted in AWS instead of your own data center.
Designed to make web-scale cloud computing easier for developers.
The capacity you want when you need it.
You are in completed control of your own instances.

# EC2 Instance Priciing 
On Demand -> Pay by the hour or the second depending on the type of instance you run.
    Flexible, Short-Term, Testing The Water
Reserved--> Reserved capacity for one or three years. Up to 72% discounton the hourly charge.**Regional**
    Predicatble Usage, Specific Capacity Requirements 
    Pay Up-Front

    Standard Rls (cannnot upgrade)
    Conertible Rls (change to a different Reservered instacnt type of equal or greater value)

    Sheduled Rls (Launch within the time window you define, day, week or month)


Spot --> Purchase unused capacity at discout of up to 90%. Price fluctuate with supply and demand.
Dedicated-> A physical EC2 server dedicated for your use. The most expensive option.

Flexible : Application the have flxible start and end time
Urgent Capacity : Image Processing
Cost Sensitive

Dedicared Hosts 
    Compliance: Regulatory requirements that may not support multi-tenant virtualization 
    Licensing:Great for licensing which does not support multi-tenancy or cloud deployments.
    On-Demand: Can be purchased on-demand
    Reserved: Can be purchased as a reservation for up to 70% off the on-demand price.

### Saving Plans
    Save up to 73%
    Commit to one or Three Years
    Super Flexible

    AWS Pricing Calculator
    


## EC2 Instance Type
Hardware -> the instance type determines the hardware of the host computer used for your instance

Capabilities-> Each instance type offers different compute, memory, and storage capabilites are grouped in instance families

#### Micro Instance ::->
#### General Purpose ::->
#### Compute Optimized ::->
#### FPGA instance ::->
#### GPU instance ::->
#### Machine Learning ASIC Instance ::->
#### Memory optimized ::->
#### Storage optimized ::->

## EBS Volumes
Elastic Block Store
#### Whare are EBS Volume
Storage volumes that you can attach to your EC2 instances.

Use them the same way you would use any system disk. Create a file system. Run a database.
Run an Operatin System
Store Data
Install Application 

#### Mission Critical
* Production Workloads -> Designed for mission critical workloads.
* Highly Available -> Automatically replicated within a single availability zone to protect against hardware failures.
* Scalable -> Dynamically increase capacity and chnage the type volumen with no downtime or performance impact to your live system.

#### Type of EBS
* General Purpose SSD (gp2)
3 IOPS per GiB, up to a maximum of 16000 IOPS per volume. gp2 volumes smaller than 1TB can burst up to 3000 IOPS. Good for boot volumnes or development and test applications which are not latency sensitive
* General Purpose SSD (gp3)
Baseline of 3000 IOPS for any volume size(1-16GB)
Delivering up to 16000 IOPS
20% cheaper than gp2!
Like gp2, they are good for boot volumes or development and test applications which are not latency sensitive.
* Provisioned IOPS SSD (io1)
Up to 64,000 IOPS per volume.. 50 IOPS per GiB.
User if you neet more than 16,000 IOPS.
Designed for I/O intensive applications, large database, and latency-sensitive workloads.

* Provisioned IOPS SSD(io2)
500 IOPS per GiB.
Up to 64,000 IOPS.
99.999% durability instead of up to 99.9%
I/O intensive apps, large database, and latency-sensitive workloads. Applications which need high levels of durability.
High durability and more IOPS
io2 price is same as io1

* Provisioned IOPS SSD io2 Block Express
SAN(Storage Area Network) in the cloud. 
Highest performance, sub-millisecond latency.
Uses EBS Block Express architecture.
4x throughput, IOPS, and capacity of regular io2 volumes.
Up to 64 TB, 256,000 IOPS per volume.
99.9999% durability

Great for the largest, most critical, high-performance applications like SAP HANA, Oracle, Ms-Sql server, and IBM DB2.

* Throughput Optimized HDD (st1)
Low-cost HDD volume
Baseline throughput of 40 MB/s per TB.
Ability to burst up to 250 MB/s per TB.
Maximum throughput of 500 MB/s per volume.
Frequently-accessed, throughput-intensive workloads. Big Data, data warehouses, ETL, and log processing. A cost effective way to store mountains of data. Cannot be a boot volume.

* Cold HDD (sc1)
Lowest Cost Option
Baseline throughput of 12MB/s per TB.
Ability to brust up to 80 MB/s per TB.
Max throughput of 250 MB/s per volume.
A good choice for colder data requiring fewer scans per day.
Good for applications that need the lowest cost and performance is not a factor.
Cannot be a boot volume.

#### IOPS
* Measures the number of read and write operation per second
* Important metric for quick transactions, low latency apps, transactional workloads.
* ability to action reads and writes very quickly
* Choose provisioned IOPS SSD (io1 or io2)

#### Throughput
* Measure the number of bits read or written per seconds.
* Important metric for large datasets, large I/O sizes, complex queries.
* The ability to deal with large datasets.
* Choose throughput Optimized HDD (st1). 



## Exam Tips
* Pay Only For What You Use
* No Wasted Capacity
* Instance Type Determines the hardware of the host compute
* Each insance type offer different compute, memory, and storage capabiities. They are grouped in instance families.
* Select an instance type base on the requirements of your applications
* Elastic Block Store: SSD Volumes
* Highly available and scalable storage volumes you can attach to an EC2 instance.
* gp2 -> General Purpose SSD, suitale for boot disks and general applications 3IOPS per GiB. Up to 16,000 IOPS per volume. Up to 99.9% durability.
* gp3 -> Latest Generation General Purpose SSD, suitable for boot disks and general application. 3000 IOPS for all volumes. Up to 16,000 IOPS per volume and Up to 99.99% durability. 20% cheaper than gp2

* io1 -> Provisioned IOPS SSD, (for finance and trading) suitable for OLTP and latency-sensitive applications. 50 IOPS/GiB. Up to 64k IOPS per volume. 
High performance and most expensive.
Up to 99.9% durability.
* io2 -> Latest Generation Provisoned IOPS SSD,(for finance and trading) suitable for OLTP and latency-sensitive applications. 500 IOPS/GiB. Up to 64k IOPS per volume. 
High performance and most expensive.
Up to 99.9% durability.
* io2 Block Express -> Provisioned IOPS SSD, (for finance and trading) suitable for largest, most critical, high-performace application: Ms-Sql servier, Oracle. Up to 64 TB, 256k IOPS per volume. 
High performance and most expensive.
Up to 99.9% durability. (SAN in cloud )
* st1 -> Througput Optimized HDD, suitable for Big Data, data warehouses, ETL. Max throughput is 500 MB/s per volume. Cannot be a boot volume. Up to 99.9% durability
* sc1 -> Cold HDD, Max throughout of 250 MB/s per volume. Less-frequently-accessed data. Cannot be a boot volume. Lowest cost. Upto 99.9% durability.

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html

* EBS Volumes -> 
* Encrypted Snapshots : If you can create an EBS volume from an encrypted snapshot, then you well get an encrypted volume.
* Unencrypted snapshots : If the snapshot is unencrypted, then any volume you create from it is also going to be unencrypted.




'OnDemandBackup'
'ClassroomOnDemandBackup','ClassroomBackup'
'SharePointBackup','SharePointOnDemandBackup','TeamsBackup','TeamsOnDemandBackup'


