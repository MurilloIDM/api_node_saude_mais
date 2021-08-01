import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class user1627599066904 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user_plus",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "weight",
            type: "decimal",
          },
          {
            name: "height",
            type: "decimal",
          },
          {
            name: "imc",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "birth_date",
            type: "timestamp",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("user");
  }
}
