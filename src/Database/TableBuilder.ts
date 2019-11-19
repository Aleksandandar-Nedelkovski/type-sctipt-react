import { StringOrNull } from "src/Types";

export interface ITableBuilder {
  WithDatabase(databaseName: string): ITableBuilder;
  WithVersion(version: number): ITableBuilder;
  WithTableName(tableName: string): ITableBuilder;
  WithPrimaryField(primaryField: string): ITableBuilder;
  WithIndexName(indexName: string): ITableBuilder;
}


export interface ITable {
  Database(): string;
  Version(): number;
  TableName(): string;
  IndexName(): string;
  Build(database: IDBDatabase): void;
}


export class TableBuilder implements ITableBuilder, ITable {
  private database: StringOrNull;
  private tableName: StringOrNull;
  private primaryField: StringOrNull;
  private indexName: StringOrNull;
  private version: number = 1;


  public WithDatabase(databaseName: string): ITableBuilder {
    this.database = databaseName;
    return this;
  }
  public WithVersion(versionNumber: number): ITableBuilder {
    this.version = versionNumber;
    return this;
  }
  public WithTableName(tableName: string): ITableBuilder {
    this.tableName = tableName;
    return this;
  }
  public WithPrimaryField(primaryField: string): ITableBuilder {
    this.primaryField = primaryField;
    return this;
  }
  public WithIndexName(indexName: string): ITableBuilder {
    this.indexName = indexName;
    return this;
  }

  public Database(): string {
    if (!this.database) {
      throw new Error("You must give a database name");
    }
    return this.database;
  }
}